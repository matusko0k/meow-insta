// src/app/page.tsx

"use client"; // This line makes this component a Client Component

import { Typography } from "@mui/material";
import { useSession } from 'next-auth/react'; // Import useSession

export default function Home() {
  const { data: session, status } = useSession(); // Get session data and status

  if (status === "loading") {
    return <Typography>Loading...</Typography>; // Optional loading state
  }

  return (
    <Typography>
      {session ? (
        `Hello, ${session.user?.name}!` // Greet the logged-in user
      ) : (
        "Domov - Please log in to see your personalized message." // Message for non-logged-in users
      )}
    </Typography>
  );
}
