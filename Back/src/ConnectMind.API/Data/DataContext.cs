using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ConnectMind.API.Models;
using Microsoft.EntityFrameworkCore;

namespace ConnectMind.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}
        public DbSet<Evento> Eventos { get; set; }
    }
}