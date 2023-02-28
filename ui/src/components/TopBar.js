function TopBar() {
  return(
    <>
      <h1 className='text-3xl font-bold'>Podcast Platform</h1>
      <nav>
        {/** Every new podcast is gonna be added in this list as links to separate components */}
        <ul className='my-2 md:mg-0 space-x-3 flex list-none'>
          <li><a href='/'>Podcast 1</a></li>
          <li><a href='/'>Podcast 2</a></li>
          <li><a href='/'>Podcast 3</a></li>
        </ul>
      </nav>
    </>
  );
}

export default TopBar;