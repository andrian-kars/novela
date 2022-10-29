import { Route, Routes } from 'react-router-dom';
import { ChapterPage, InitialPage, ErrorPage } from 'src/components/pages';
import { ERROR_CODE_404 } from 'src/constants';
import { Header, Main } from './components/layouts';
import './styles/index.scss';
import { useEffectOnce } from 'src/hooks/useEffectOnce/useEffectOnce';
import { themeAdapter } from 'src/helpers/adapters';

export const App = () => {
  useEffectOnce(() => {
    const theme = themeAdapter.theme;

    for (const key in theme) {
      document.body.setAttribute(`data-theme-${key}`, theme[key]);
    }
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
