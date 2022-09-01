import { Route, Routes } from 'react-router-dom';
import { Header, Main } from 'src/components/layouts';
import { ChapterPage, InitialPage, ErrorPage } from './components/pages';
import errors from 'src/constans';
import './styles/index.scss';

export const App = () => (
  <>
    <Header />
    <Main>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/chapter" element={<ChapterPage />} />
        <Route path="*" element={<ErrorPage errorCode={errors.ERROR_CODE_404} />} />
      </Routes>
    </Main>
  </>
);
