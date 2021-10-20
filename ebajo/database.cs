using System;
using System.Collections.Generic;

namespace ECommerce.DAL
{
    public class DbContext
    {
        public List<Product> Products { get; set; }
    }
    public interface IId
    {
        public int Id { get; set; }
    }

    //Product Entity
    public class Product : IId
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int CategoryId { get; set; }
    }
}
