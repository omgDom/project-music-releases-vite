import './Header.css'

export const Header = () => {
  const header = "New Albums & Singles";

  return (
    <header>
        <div className='headerContainer'>
            <h1>{header}</h1>
        </div>
    </header>
  );
};
