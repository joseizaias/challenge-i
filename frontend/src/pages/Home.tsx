import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authGoogle";
import { IResearch } from "../interfaces/IGoogleContext";

interface ApiResponse {
  items: IItems[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

interface IItems {
  tags: string[],
  owner: {
    account_id: number;
    reputation: number;
    user_id: number;
    user_type: string;
    profile_image: string;
    display_name: string;
    link: string;
  },
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  question_id: number;
  content_license: string;
  link: string;
  title: string;
}

export function Home() {

  const { user, handleSignOut, userData, clearUserData } = useAuth();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<IResearch[] | null>(null);

  const handleSearch = async () => {
    event?.preventDefault();
    const texttreated = searchText.replace(/\s/g, ";");
    
    const searchResults = await axios.get(`http://localhost:3333/searchestackoverflow/${texttreated}`);
    setSearchResults(searchResults.data);
  }

  const loadOldSearches = async () => {
    event?.preventDefault();

    setSearchResults(userData);
  }

  const deleteOldSearches = async () => {
    event?.preventDefault();

    await axios.delete(`http://localhost:3333/research/${user?.email}`);

    clearUserData();
    setSearchResults([]);
  }

  const salveSearches = async () => {
    event?.preventDefault();

    await axios.post(`http://localhost:3333/research/${user?.email}`, {
      userData: searchResults
    });
  }

  if (!user) { 
    return <Navigate to="/" />;
  } else {
    return (
      <div className="MainContainer">
        <div className="row1">
          <h1>Home</h1>
          <div>
            <form className='row2' action="#" onSubmit={() => handleSearch()}>
              <input type="text" placeholder="Search" onChange={(event) => setSearchText(event.target.value)} />
              <button type='submit' >Search</button>
            </form>
          </div>
          <div>
          {user &&
              <button onClick={() => handleSignOut()}>Logout</button>
            }
          </div>
          <div>
            { userData && userData.length > 0 ? 
              <button onClick={() => loadOldSearches()}>Load Old Searches</button>
               :
               <br />
            }
          </div>
          <div>
            { userData.length && userData.length > 0 ? 
              <button onClick={() => deleteOldSearches()}>Delete Old Searches</button>
              : 
              <br />
            }
          </div>
          <div>
            { 
              searchResults && searchResults.length > 0 ?
              <button onClick={() => salveSearches()}>Salve Searches</button>
              : 
              <br />
            } 
          </div>
        </div>
        <div>
          <h2>Search Results</h2>
          {
            searchResults && searchResults.length > 0 ?
              <div className="row3">
                <ul>
                  {searchResults.map((item: IResearch, index) => (
                    <li key={index}>
                      <a target="_blank"  href={item.link}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              :
              <div>
                {searchResults && <p>No results found</p>}
              </div>
          }
        </div>
      </div>
    )
  }
}
