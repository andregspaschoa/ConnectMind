using AutoMapper;
using ConnectMind.Application.Dtos;
using ConnectMind.Domain;

namespace ConnectMind.API.Helpers;

{
    public class ConnectMindProfile : Profile
    {
        public ConnectMindProfile()
        {
            CreateMap<Evento, EventoDto>().ReverseMap();
        }

    }

}