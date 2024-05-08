"use client";

import axios from "axios";
import { getSession } from "@/utils/getUserInfo";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserDataProps {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  private_gists: number;
  total_private_repos: number;
  owned_private_repos: number;
  disk_usage: number;
  collaborators: number;
  two_factor_authentication: boolean;
  plan: {
    name: string;
    space: number;
    collaborators: number;
    private_repos: number;
  };
}
interface ReposResponse {
  name: string;
  description: string;
  languague: string;
  created_at: string;
  updated_at: string;
  visibility: string;
  stargazers_count: number;
  open_issues_count: number;
  watchers_count: number;
  language: string;
}
interface IGithubDataContext {
  userData: UserDataProps;
  repos: ReposResponse[];
  languages: string[];
}

interface GithubDataContextProviderProps {
  children: ReactNode;
}

export const GithubDataContext = createContext({} as IGithubDataContext);

export function GithubDataContextProvider({
  children,
}: GithubDataContextProviderProps) {
  const [userData, setUserData] = useState<UserDataProps>({} as UserDataProps);
  const [repos, setRepos] = useState<ReposResponse[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  
  async function fetchRepos(userData: UserDataProps) {
    try {
      const { repos_url } = userData;
      const response = await axios.get(repos_url);
      setRepos(response.data);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  }

  useEffect(() => {
    async function fetchUserData() {
      try {
        const accessToken = await getAccessToken();
        const response = await axios.get("https://api.github.com/user", {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data from GitHub:", error);
      }
    }

    async function getAccessToken() {
      const session = await getSession();
      return session?.accessToken!;
    }

    fetchUserData();
  }, []);

  useEffect(() => {
    const allLanguages: { [key: string]: number } = {};
    repos.forEach((repo) => {
      if (repo.language) {
        allLanguages[repo.language] = (allLanguages[repo.language] || 0) + 1;
      }
    });
    const sortedLanguages = Object.keys(allLanguages).sort(
      (a, b) => allLanguages[b] - allLanguages[a]
    );
    const limitedLanguages = sortedLanguages.slice(0, 5);
    setLanguages(limitedLanguages);
  }, [repos, setLanguages]);

  useEffect(() => {
    if (userData) {
      fetchRepos(userData);
    }
  }, [userData]);

  return (
    <GithubDataContext.Provider value={{ userData, repos, languages }}>
      {children}
    </GithubDataContext.Provider>
  );
}

export function useGithubDataContext() {
  const context = useContext(GithubDataContext);
  if (!context) {
    console.error("Error deploying Github App Context");
  }
  return context;
}
