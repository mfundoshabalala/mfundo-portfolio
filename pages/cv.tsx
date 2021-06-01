/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import Head from "next/head";
import { useUser, UserProfile, withPageAuthRequired } from "@auth0/nextjs-auth0";

type ProfileProps = { user: UserProfile };

const CV: React.FunctionComponent<ProfileProps> = ({ user }) => {
  const { error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <Head>
        <title>Curriculum Vitae</title>
      </Head>
      <div className="flex flex-col items-center h-full">
        <h1 className="text-center text-8xl w-full">Curriculum Vitae Page</h1>
        {user && (
          <div>
            <h1>Welcome, {user?.nickname} has been granted access to my Curriculum Vitae.</h1>
            <p>Curriculum Vitae Component</p>
          </div>
        )}
        {!user && <div>Please sign up to request CV for security reasons</div>}
        {error && <div>An error has occurred, please sign in to continue</div>}
        <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  );
};

export default CV;

export const getServerSideProps = withPageAuthRequired();
