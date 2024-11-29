import MenuItems from '@/components/ui/MenuItems';

const DrawerSide = () => {
  // const themeList: string[] = ['dim', 'dark', 'cupcake', 'nord', 'pastel'];

  return (
    <div className="drawer-side">
      <label htmlFor="app-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        <MenuItems/>
      </ul>

      {/*<div className="bg-base-200 min-h-full w-80">
        <ul className="menu ">
          <MenuItems/>
        </ul>

        <details className="dropdown">
          <summary className="btn m-1">open or close</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </details>
      </div>*/}


      {/*<details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details>*/}

      {/*<div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className="btn m-1">
          Theme
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
      </div>*/}
    </div>
  );
};

export default DrawerSide;