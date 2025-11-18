import { useState } from 'react';
import type { Reservation } from '../types';
import { reservationService } from '../services/api';

const Reservation = () => {
  const [formData, setFormData] = useState<Reservation>({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 2,
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const result = await reservationService.create(formData);
      setMessage(result.message);
      if (result.success) {
        setFormData({
          name: '',
          email: '',
          date: '',
          time: '',
          guests: 2,
          notes: '',
        });
      }
    } catch (error) {
      setMessage('Terjadi kesalahan saat membuat reservasi');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value,
    }));
  };

  return (
    <div className="min-h-screen bg-japan-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 font-japanese">Inshoku Ten</h1>
          <h2 className="text-2xl font-semibold text-japan-600 mb-4">Reservasi Online</h2>
          <p className="text-gray-600 text-lg">
            Pilih tanggal dan waktu, kami akan menyiapkan meja terbaik untuk Anda.
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-japan-100">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-japan-500 rounded-full"></div>
              <span>Buka setiap hari 10.00 - 22.00 WIB</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-japan-500 rounded-full"></div>
              <span>Private room tersedia</span>
            </div>
          </div>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-japan-500 focus:border-japan-500 transition-colors duration-200"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-japan-500 focus:border-japan-500 transition-colors duration-200"
                placeholder="email@contoh.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tanggal
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-japan-500 focus:border-japan-500 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                  Waktu
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-japan-500 focus:border-japan-500 transition-colors duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">
                Jumlah Tamu
              </label>
              <select
                id="guests"
                name="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-japan-500 focus:border-japan-500 transition-colors duration-200"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'orang' : 'orang'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                Catatan
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-japan-500 focus:border-japan-500 transition-colors duration-200"
                placeholder="Preferensi tempat duduk, alergi, dsb."
              />
            </div>

            {message && (
              <div className={`p-4 rounded-lg ${
                message.includes('berhasil') 
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-japan-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-japan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-japan-500 disabled:opacity-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isSubmitting ? 'Memproses...' : 'Pesan Meja'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;