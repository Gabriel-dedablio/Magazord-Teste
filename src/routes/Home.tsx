import { useState } from 'react';
import { UserProps } from "../types/user";
import { ReposProps } from "../types/repo";
import User from "../components/User";
import Error from "../components/Error";
import Header from "../components/Header";
import TabsUser from '../components/Tabs';

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [repo, setRepo] = useState<ReposProps[]>([]);
  const [starred, setStarred] = useState<ReposProps[]>([]);
  const [error, setError] = useState(false);

  const load = async (userName: string) => {
    getUser(userName);
    getRepo(userName);
    getStarred(userName);
  }


  const getUser = async (userName: string) => {
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (res.status === 404) {
      setError(true)
      return;
    }
    const { avatar_url, name, location, company, blog, twitter_username, bio, } = data;

    const userData: UserProps = {
      avatar_url,
      name,
      location,
      company,
      blog,
      bio,
      twitter_username,
    };
    setUser(userData);
  }

  const getRepo = async (userName: string) => {
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${userName}/repos`);
    const data = await res.json();

    if (res.status === 404) {
      setError(true)
      return;
    }

    setRepo(data.map((e: ReposProps) => {
      const { name, full_name, description, url, git_url, html_url, language, stargazers_count, forks_count, } = e;
      const repoData: ReposProps = {
        name,
        full_name,
        description,
        url,
        git_url,
        html_url,
        language,
        stargazers_count,
        forks_count,
      };
      return repoData;
    }));
  }

  const getStarred = async (userName: string) => {
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${userName}/starred`);
    const data = await res.json();

    if (res.status === 404) {
      setError(true)
      return;
    }

    setStarred(data.map((e: ReposProps) => {
      const { name, full_name, description, url, git_url, html_url, language, stargazers_count, forks_count } = e;
      const repoData: ReposProps = {
        name,
        full_name,
        description,
        url,
        git_url,
        html_url,
        language,
        stargazers_count,
        forks_count,
      };
      return repoData;
    }));
  }


  return (
    <>
      <Header loadUser={load} />
      <div className="container">
        {user ?
          (
            <div className="row">
              <User {...user} />
              <TabsUser repo={repo.slice()} starred={starred.slice()} />
            </div>
          )
          :
          ""
        }
        {error && <Error />}
      </div>
    </>
  )
};

export default Home;