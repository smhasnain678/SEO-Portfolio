import Portfolio from "./Portfolio";

const Index = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to your blank app</h1>
          <p className="text-xl text-muted-foreground">
            Start building your amazing project here
          </p>
        </div>
      </div>

      <Portfolio />
    </>
  );
};

export default Index;
