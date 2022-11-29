import RickAndMortyLogo from '/assets/images/rick-and-morty-logo.png';

const Header = () => {
  return (
    <header className='py-5'>
      <picture className='justify-center h-24'>
        <img src={RickAndMortyLogo} alt='Rick and Morty logo' />
      </picture>
    </header>
  );
};

export default Header;
