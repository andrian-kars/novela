import { Route, Routes } from 'react-router-dom';
import { ChapterPage, InitialPage, ErrorPage } from 'src/components/pages';
import { ERROR_CODE_404 } from 'src/constants';
import { Header, Main } from './components/layouts';
import './styles/index.scss';
import { useEffectOnce } from 'src/hooks/useEffectOnce/useEffectOnce';

export const App = () => {
  useEffectOnce(() => {
    document.body.setAttribute('data-theme-color', 'light');
    document.body.setAttribute('data-theme-background', 'dark');
  });

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/chapter" element={<ChapterPage />} />
          <Route path="*" element={<ErrorPage errorCode={ERROR_CODE_404} />} />
        </Routes>
      </Main>
    </>
  );
};
