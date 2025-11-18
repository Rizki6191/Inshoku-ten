import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-lg border-b-4 border-japan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-japan-500 rounded-full flex items-center justify-center group-hover:bg-japan-600 transition-colors duration-200">
              <span className="text-black font-bold text-xl">食</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-black-900 font-japanese">Inshoku Ten</span>
              <p className="text-sm text-japan-600">Authentic Washoku</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link 
              to="/menu" 
              className="text-gray-700 hover:text-japan-500 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-japan-50"
            >
              Menu
            </Link>
            <Link 
              to="/reservation" 
              className="text-gray-700 hover:text-japan-500 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-japan-50"
            >
              Reservasi
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/cart" 
                  className="text-gray-700 hover:text-japan-500 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-japan-50"
                >
                  Keranjang
                </Link>
                <span className="text-gray-600">Halo, {user.name}</span>
                <button
                  onClick={logout}
                  className="bg-white border-2 border-japan-500 text-japan-500 px-4 py-2 rounded-lg font-medium hover:bg-japan-500 hover:text-white transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-japan-500 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-japan-50"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="bg-japan-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-japan-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Daftar
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;