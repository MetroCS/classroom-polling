/**
 * Copyright (C) 2026 Dr. Jody Paul
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * See the project LICENSE file for full GPL-3 details.
 */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RoleSelector from './pages/RoleSelector';
import InstructorPage  from './pages/InstructorPage';
import StudentPage  from './pages/StudentPage';
import PollSetDetail from './pages/PollSetDetail';
import PollSets     from './pages/PollSets';
import PollHistory  from './pages/PollHistory';

export default function App() {
  return (
    <BrowserRouter basename="/classroom-polling">
      <Routes>
        <Route path="/"          element={<RoleSelector />} />
        <Route path="/instructor"   element={<InstructorPage />} />
        <Route path="/student"   element={<StudentPage />} />
        <Route path="/pollsets/:id" element={<PollSetDetail />} />
        <Route path="/pollsets"   element={<PollSets />} />
        <Route path="/history"   element={<PollHistory />} />
        <Route path="*"          element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
