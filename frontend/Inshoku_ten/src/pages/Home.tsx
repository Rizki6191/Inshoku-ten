import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-japan-50 bg-japan-pattern">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-japan-500 to-japan-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-japan-500 text-black text-4xl font-bold">食</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-japanese tracking-tight">
              Inshoku Ten
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-light opacity-90">
              現代的な和食レストラン
            </p>
            <p className="text-lg mb-4 max-w-3xl mx-auto leading-relaxed">
              Restoran Jepang modern yang menghadirkan pengalaman rasa asli Jepang.
            </p>
            <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto">
              Temukan ramen hangat, sushi segar, wagashi manis, dan matcha premium dalam satu tempat.
            </p>
          </div>
          <div className="space-x-4 animate-slide-up">
            <Link
              to="/menu"
              className="inline-block bg-white text-japan-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Lihat Menu
            </Link>
            <Link
              to="/reservation"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-japan-500 transition-all duration-200 transform hover:-translate-y-1"
            >
              Reservasi
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-japanese">
              Menu Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilih dari makanan, minuman, dan camilan khas Jepang
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tonkotsu Ramen */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-japan-200 group">
              <div className="w-20 h-20 bg-japan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-2xl">🍜</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Tonkotsu Ramen</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                Kuah kaya collagen, chashu, jamur kikurage
              </p>
              <p className="text-3xl font-bold text-black text-japan-500 text-center">Rp 78.000</p>
            </div>
            
            {/* Salmon Night */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-japan-200 group">
              <div className="w-20 h-20 bg-japan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-2xl">🍣</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Salmon Night</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                Sushi nasi shari lembut, salmon segar
              </p>
              <p className="text-3xl font-bold text-black text-japan-500 text-center">Rp 52.000</p>
            </div>
            
            {/* Chicken Katsu */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-japan-200 group">
              <div className="w-20 h-20 bg-japan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-2xl">🍗</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Chicken Katsu</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                Ayam panko goreng, saus tonkatsu
              </p>
              <p className="text-3xl font-bold text-black text-japan-500 text-center">Rp 62.000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;