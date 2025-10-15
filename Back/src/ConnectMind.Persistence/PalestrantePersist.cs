using System.Linq;
using System.Threading.Tasks;
using ConnectMind.Domain;
using ConnectMind.Persistence.Contextos;
using ConnectMind.Persistence.Contratos;
using Microsoft.EntityFrameworkCore;

namespace ConnectMind.Persistence
{
    public class PalestrantePersist : IPalestrantePersist
    {
        private readonly ConnectMindContext _context;
        public PalestrantePersist(ConnectMindContext context)
        {
            _context = context;
            
        }
        public async Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos = false)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
                .Include(p => p.RedesSociais);
            if (includeEventos) 
            {
                query = query
                .Include(p => p.PalestrantesEventos)
                .ThenInclude(pe => pe.Evento);
            }

            query = query.AsNoTracking().OrderBy( p => p.Id);
            return await query.ToArrayAsync();           
        }

        public async Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEventos)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
                .Include(p => p.RedesSociais);
            if (includeEventos) 
            {
                query = query
                .Include(p => p.PalestrantesEventos)
                .ThenInclude(pe => pe.Evento);
            }

            query = query.AsNoTracking().OrderBy( p => p.Id)
                    .Where(p => p.Nome.ToLower().Contains(nome.ToLower()));
            return await query.ToArrayAsync();                   
        }

        public async Task<Palestrante> GetPalestranteByIdAsync(int palestranteId, bool includeEventos)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
                .Include(p => p.RedesSociais);
            if (includeEventos) 
            {
                query = query
                .Include(p => p.PalestrantesEventos)
                .ThenInclude(pe => pe.Evento);
            }

            query = query.AsNoTracking().OrderBy( p => p.Id)
                    .Where(p => p.Id == palestranteId);
            return await query.FirstOrDefaultAsync();            
        }
    }
}