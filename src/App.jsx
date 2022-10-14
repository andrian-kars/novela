import { Route, Routes } from 'react-router-dom';
import { ChapterPage, InitialPage, ErrorPage } from 'src/components/pages';
import { ERROR_CODE_404 } from 'src/constants';
import { Layout } from 'src/components/layouts';
import './styles/index.scss';

export const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/chapter" element={<ChapterPage />} />
      <Route path="*" element={<ErrorPage errorCode={ERROR_CODE_404} />} />
    </Routes>
  </Layout>
);
