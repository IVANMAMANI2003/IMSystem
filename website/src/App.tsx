import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/context/ThemeContext';
import { Header } from '@/presentation/components/Header';
import { Footer } from '@/presentation/components/Footer';
import { HomePage } from '@/presentation/pages/HomePage';
import { AboutPage } from '@/presentation/pages/AboutPage';
import { WorkPage } from '@/presentation/pages/WorkPage';
import { BlogPage } from '@/presentation/pages/BlogPage';
import { BlogPostPage } from '@/presentation/pages/BlogPostPage';
import { GalleryPage } from '@/presentation/pages/GalleryPage';
import { ContactPage } from '@/presentation/pages/ContactPage';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <div className="flex min-h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
