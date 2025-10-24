using AutoMapper;
using ConnectMind.Application.Dtos;
using ConnectMind.Domain;

namespace ConnectMind.API.Helpers
{
    public class ConnectMindProfile : Profile
    {
        public ConnectMindProfile()
        {
            CreateMap<Evento, EventoDto>().ReverseMap();
            CreateMap<Lote, LoteDto>().ReverseMap();
            CreateMap<RedeSocial, RedeSocialDto>().ReverseMap();    
            CreateMap<Palestrante, PalestranteDto>().ReverseMap();
        }
    }
}