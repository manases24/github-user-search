import { useQuery } from "@tanstack/react-query";
import { useAppContext } from "./context";
import { GitHubUser } from "./api/types";
import { githubUserFetch, url } from "./api/httpAdapter";
import { UserMediaLinks } from "./UserMedia";

export const Card = () => {
  const { searchTerm } = useAppContext();

  const { data, isLoading, isError } = useQuery<GitHubUser>({
    queryKey: ["username", searchTerm],
    queryFn: async () => {
      const response = await githubUserFetch.get<GitHubUser>(
        `${url}${searchTerm}`
      );
      return response;
    },
    enabled: !!searchTerm, 
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data...</p>;

  if (!data) return <p>No user data available</p>;

  // Formatear la fecha
  const formattedDate = new Date(data.created_at).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className='px-6 pt-8 shadow-lg bg-primary-lighter rounded-2xl md:pt-10'>
      <div className='flex'>
        <img
          className='rounded-full h-[70px] w-[70px] md:h-[120px] md:w-[120px]'
          src={data.avatar_url}
          alt={`Avatar of ${data.name ?? data.login}`}
        />
        <div className='w-full mb-8 ml-5 md:mt-6 lg:ml-10 lg:flex lg:justify-between lg:mt-0'>
          <div className='flex flex-col mb-2.5 lg:mb-5'>
            <p className='font-bold text-primary-foreground md:text-[26px] lg:mb-3'>
              {data.name ?? data.login}
            </p>
            <a
              href={data.html_url}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-1 text-xs text-btn md:text-base'
            >
              @{data.login}
            </a>
          </div>
          <p className='text-secondary-lighter'>Joined {formattedDate}</p>
        </div>
      </div>
      <p
        className={`leading-6 ${
          data.bio ? 'text-svg lg:ml-40' : 'text-svg-disabled/50 italic lg:ml-40'
        }`}
      >
        {data.bio ?? 'The profile has no bio'}
      </p>
      <div className='bg-primary rounded-[10px] mt-6 flex justify-between px-9 py-5 items-center lg:ml-40'>
        <UserStat label='Repos' value={data.public_repos} />
        <UserStat label='Followers' value={data.followers} />
        <UserStat label='Following' value={data.following} />
      </div>
      <div className='pb-12 mt-6 space-y-4 bg-primary-lighter text-secondary-lighter md:mt-8 lg:ml-40'>
        <UserMediaLinks data={data} />
      </div>
    </div>
  );

};

// Helper Component to show User stats
const UserStat = ({ label, value }: { label: string; value: number | null }) => (
  <div className='flex flex-col items-center'>
    <p className='mb-2 text-secondary-lighter'>{label}</p>
    <p className='font-bold md:text-2xl'>{value}</p>
  </div>
);
