import { FaTimes } from 'react-icons/fa';
import subLinks from './data';
import { useGlobalContext } from './Contex';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {subLinks.map((item) => {
            const { links, page, pageId } = item;

            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { url, icon, label, id } = link;
                    return (
                      <a href={url} key={id}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
