import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <h1 className="text-2xl font-bold mb-8">Clerk Authentication</h1>
      
      <div className="flex gap-4">
        <Show when="signed-out">
          <SignInButton mode="modal">
            <button className="bg-black text-white px-6 py-2 rounded-md font-medium">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="border border-black px-6 py-2 rounded-md font-medium">
              Sign Up
            </button>
          </SignUpButton>
        </Show>
        
        <Show when="signed-in">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-600">You are signed in.</p>
            <UserButton afterSignOutUrl="/" />
          </div>
        </Show>
      </div>
    </div>
  );
}
