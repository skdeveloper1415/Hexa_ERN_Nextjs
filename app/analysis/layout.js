export const metadata = {
    title: "Hexa Erate Dashboard",
    description: "Welcome to Hexa Erate Dashboard",
    icons: {
      icon: [{ url: "/logo.svg" }],
    },
  };
  
  export default function SnapshotView({ children }) {
    return (      
      <>
      {children}
      </>
    );
  }