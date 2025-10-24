
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ConnectMind.Application.Dtos
{
    public class EventoDto
    {
        public int Id { get; set; }   

        [Required(ErrorMessage = "O campo {0} é obrigatório.")]
        public string Local { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório.")]
        public DateTime DataEvento { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório."),
        StringLength(50, MinimumLength = 3, ErrorMessage = "O campo {0} deve ter entre {2} e {1} caracteres.")]
        public string Tema { get; set; }

        [Display(Name = "Qtd de Pessoas"),
        Range(1, 1200, ErrorMessage = "O campo {0} deve ter entre {1} e {2} de pessoas.")]
        public int QtdPessoas { get; set; }       

        [RegularExpression(@".*\.(gif|jpe?g|bmp|png)$",
        ErrorMessage = "Não é uma imagem válida. (gif, jpg, jpeg, bmp ou png)")]
        public string ImageURL { get; set; }

        [Phone(ErrorMessage = "O campo {0} deve ser um número de telefone válido.")]
        public string Telefone { get; set; }

        [Display(Name = "e-mail"),
        Required(ErrorMessage = "O campo {0} é obrigatório."),
        EmailAddress(ErrorMessage = "É necessário ser um {0} válido.")]
        public string Email { get; set; }

        public IEnumerable<LoteDto> Lotes { get; set; }

        public IEnumerable<RedeSocialDto> RedesSociais { get; set; }

        public IEnumerable<PalestranteDto> Palestrantes { get; set; }
    }
}