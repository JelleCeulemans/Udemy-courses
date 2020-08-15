using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

namespace Vidly3._0.AutoMapper
{
    public interface ICustomMapping
    {
        void CreateMappings(Profile configuration);
    }
}
