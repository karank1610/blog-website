import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Placeholder pages - we'll create these one by one
// const HomePage = () => <div className="homepage-main min-h-screen flex items-center justify-center text-gray-500">HomePage - Coming Soon</div>;
// const BlogPage = () => <div className="blogpage-main min-h-screen flex items-center justify-center text-gray-500">BlogPage - Coming Soon</div>;
// const SingleBlogPage = () => <div className="singleblogpage-main min-h-screen flex items-center justify-center text-gray-500">SingleBlogPage - Coming Soon</div>;
// const AboutPage = () => <div className="aboutpage-main min-h-screen flex items-center justify-center text-gray-500">AboutPage - Coming Soon</div>;
// const ContactPage = () => <div className="contactpage-main min-h-screen flex items-center justify-center text-gray-500">ContactPage - Coming Soon</div>;
// const LoginPage = () => <div className="loginpage-main min-h-screen flex items-center justify-center text-gray-500">LoginPage - Coming Soon</div>;
// const DashboardPage = () => <div className="dashboardpage-main min-h-screen flex items-center justify-center text-gray-500">DashboardPage - Coming Soon</div>;
// const CreateBlogPage = () => <div className="createblogpage-main min-h-screen flex items-center justify-center text-gray-500">CreateBlogPage - Coming Soon</div>;
// const EditBlogPage = () => <div className="editblogpage-main min-h-screen flex items-center justify-center text-gray-500">EditBlogPage - Coming Soon</div>;
// const ManageBlogsPage = () => <div className="manageblogspage-main min-h-screen flex items-center justify-center text-gray-500">ManageBlogsPage - Coming Soon</div>;

function App() {
  return (
    <BrowserRouter>
      <div className="app-main min-h-screen flex flex-col">
        <Navbar />
        {/* <main className="app-content flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogs/:slug" element={<SingleBlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<DashboardPage />} />
            <Route path="/admin/blogs" element={<ManageBlogsPage />} />
            <Route path="/admin/blogs/create" element={<CreateBlogPage />} />
            <Route path="/admin/blogs/edit/:id" element={<EditBlogPage />} />
          </Routes>
        </main> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;