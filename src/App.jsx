import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RoleSelector from './pages/RoleSelector';
import TeacherPage  from './pages/TeacherPage';
import StudentPage  from './pages/StudentPage';
import PollSetDetail from './pages/PollSetDetail';
import PollSets     from './pages/PollSets';
import PollHistory  from './pages/PollHistory';

export default function App() {
  return (
    <BrowserRouter basename="/classroom-polling">
      <Routes>
        <Route path="/"          element={<RoleSelector />} />
        <Route path="/teacher"   element={<TeacherPage />} />
        <Route path="/student"   element={<StudentPage />} />
        <Route path="/pollsets/:id" element={<PollSetDetail />} />
        <Route path="/pollsets"   element={<PollSets />} />
        <Route path="/history"   element={<PollHistory />} />
        <Route path="*"          element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
