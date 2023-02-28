function EpisodeHighlight() {
  return(
    <div className='py-2 px-4 border border-slate-800 rounded-md'>
      <progress max='100' value='25' className='mb-2 h-1 w-full'></progress> {/** Progress Bar */}
      <p className='text-center text-sm text-slate-800'>14:23 <span className='mx-2'>{'>'}</span> <a href='/' className='hover:text-blue-800'>Podcast Episode</a> <span className='mx-2'>{'>'}</span> <a href='/' className='hover:text-blue-800'>Podcast Show</a> </p>
    </div>
  );
}

export default EpisodeHighlight;