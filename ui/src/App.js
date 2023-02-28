import './App.css';
import TopBar from './components/TopBar';
import NotePreview from './components/NotePreview';
import AddNewNote from './components/AddNewNote';
import EpisodeHighlight from './components/EpisodeHighlight';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header className='p-4 flex flex-col md:flex-row justify-between items-center bg-sky-800 text-white'>
        <TopBar />
      </header>
      <main className='m-2 p-2'>
        {/** EPISODES NOTES */}
        <h2 className='mb-4 text-2xl'>Yours Notes</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <NotePreview />
          <NotePreview />
          <NotePreview />
          <NotePreview />
          <NotePreview />
          <AddNewNote />
        </div>

        {/** EPISODES HIGHLIGHTS */}
        <h2 className='my-4 text-2xl'>Your highlights</h2>
        <div className='grid grod-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <EpisodeHighlight />
          <EpisodeHighlight />
          <EpisodeHighlight />
          <EpisodeHighlight />
        </div>
      </main>
      <footer className='mt-8 px-8 py-4 space-x-2 flex flex-col md:flex-row justify-between items-center bg-slate-50'>
        <Footer />
      </footer>
    </>

  );
}

export default App;
