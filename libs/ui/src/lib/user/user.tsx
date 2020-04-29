import React, { useState } from 'react';
import shortid from 'shortid';
import './user.scss';

export interface UiProps {
  user: any;
  repos: any;
}

export const User = (props: UiProps) => {
  const [activeRepoId, setActiveRepoId] = useState(null);

  return (
    <div className="container">
      <div className="col user">
        <img className="user-avatar" src={props.user.avatar_url} />
        <p className="user-name-test">Name: {props.user.name}</p>
        <p>Email: {props.user.email || '-'}</p>
        <p>Location: {props.user.location || '-'}</p>
        <p>Followers: {props.user.followers || '-'}</p>
      </div>
      <div className="col repos">
        {props.repos &&
          props.repos.length > 0 &&
          props.repos.map(rep => (
            <div
              key={shortid.generate()}
              className="repository-item"
              onClick={() => setActiveRepoId(rep.id)}
            >
              <div className="repository-url">
                <a href={rep.html_url} target="_blank">
                  {rep.name}
                </a>
              </div>

              {activeRepoId === rep.id && (
                <div className="description">
                  <p>Description: {rep.description || '-'}</p>
                  <p>Forked: {rep.fork}</p>
                  <p>Stars: {rep.stargazers_count || 0}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default User;
