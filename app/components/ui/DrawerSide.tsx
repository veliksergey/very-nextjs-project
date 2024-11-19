import MenuItems from '@/app/components/ui/MenuItems';

const DrawerSide = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        <MenuItems/>
      </ul>
    </div>
  );
};

export default DrawerSide;