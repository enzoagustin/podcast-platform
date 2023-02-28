
function NotePreview() {
  return(
    <div className='p-4 space-y-2 border border-slate-800 rounded-md'>
      <h3 className='text-xl'>Note title</h3>
        <p className='text-justify text-slate-800'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper lectus vitae nibh dignissim blandit. Pellentesque eros mi, vestibulum ut cursus sed, malesuada ac massa. Morbi in nunc sit amet est sagittis egestas. In hac habitasse platea dictumst. Donec id.
        </p>
        {/** This line is gonna be executed if the card content is greater than n-lines */}
        <a href='/' className='pb-2 block text-center hover:bg-slate-100 rounded-md'>. . .</a>
        <hr></hr>
        <div>
          <a href='/' className='block hover:text-sky-800'>Podcast Show</a>
          <p className='ml-2'>
            <span>↳</span>
            <a href='/' className='ml-1 hover:text-sky-800'>Podcast Episode</a>
          </p>
        </div>
    </div>
  );
}

export default NotePreview;