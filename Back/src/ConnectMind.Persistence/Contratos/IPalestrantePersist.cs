using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ConnectMind.Domain;

namespace ConnectMind.Persistence.Contratos
{
    public interface IPalestrantePersist
    {

        Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEventos);
        Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos);
        Task<Palestrante> GetPalestranteByIdAsync(int palestranteId, bool includeEventos);

    }
}