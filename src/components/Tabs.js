import React, { useState } from "react";
import PropTypes from "prop-types";

export const Tab = ({ title, onClick, active = false }) => {
  const onClickTab = e => {
    e.preventDefault(0);
    onClick(title);
  };

  return (
    <>
      <li className={`${active ? "active" : ""} tab-item`} onClick={onClickTab}>
        {title}
      </li>

      <style jsx="true">{`
        li.tab-item {
          list-style-type: none;
          padding: 1rem 2rem;
          background-color: #b2beb5;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          cursor: pointer;
          transition: all 0.5s ease;
        }

        li.tab-item:hover,
        li.tab-item.active {
          background-color: #76fa97;
        }
      `}</style>
    </>
  );
};

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.title);

  const onClickTabItem = tab => setActiveTab(tab);

  return (
    <>
      <div className="tabs">
        <ul className="tab-list">
          {children.map(tab => {
            const { title } = tab.props;

            return (
              <Tab
                key={title}
                title={title}
                onClick={onClickTabItem}
                active={title === activeTab ? true : false}
              />
            );
          })}
        </ul>

        <div className="tab-content">
          {children.map(tab => {
            if (tab.props.title !== activeTab) return undefined;

            return tab.props.children;
          })}
        </div>
      </div>

      <style jsx="true">{`
        .tab-list {
          padding: 0;
          display: flex;
        }

        .tab-content {
          padding: 0 1rem;
        }

        .tab-content p {
          text-align: justify;
        }
      `}</style>
    </>
  );
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
};
