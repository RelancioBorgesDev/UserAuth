import SignIn from "./(auth)/_sign-in/page";

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-between">
      <SignIn />
    </main>
  );
}
