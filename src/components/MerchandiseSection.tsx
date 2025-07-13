import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Truck, Shield } from "lucide-react"

const MerchandiseSection = () => {
  const products = [
    {
      id: 1,
      name: "DJ Kach Gospel Hoodie",
      price: 2500,
      originalPrice: 3000,
      category: "Apparel",
      rating: 4.8,
      reviews: 45,
      inStock: true,
      image: "🎧",
      description: "Premium quality hoodie with DJ Kach logo and gospel-inspired design",
      colors: ["Black", "Navy", "Purple"]
    },
    {
      id: 2,
      name: "Gospel Mix Collection USB",
      price: 1000,
      originalPrice: null,
      category: "Music",
      rating: 5.0,
      reviews: 78,
      inStock: true,
      image: "💿",
      description: "Complete collection of DJ Kach's best gospel mixes on premium USB drive",
      colors: ["Silver", "Gold"]
    },
    {
      id: 3,
      name: "Faith & Beats T-Shirt",
      price: 1200,
      originalPrice: 1500,
      category: "Apparel",
      rating: 4.6,
      reviews: 32,
      inStock: true,
      image: "👕",
      description: "Comfortable cotton t-shirt with inspiring gospel message",
      colors: ["White", "Black", "Gray"]
    },
    {
      id: 4,
      name: "DJ Kach Branded Cap",
      price: 800,
      originalPrice: null,
      category: "Accessories",
      rating: 4.7,
      reviews: 56,
      inStock: true,
      image: "🧢",
      description: "Adjustable cap with embroidered DJ Kach logo",
      colors: ["Black", "White", "Red"]
    },
    {
      id: 5,
      name: "Gospel DJ Backpack",
      price: 2800,
      originalPrice: 3200,
      category: "Accessories",
      rating: 4.9,
      reviews: 23,
      inStock: false,
      image: "🎒",
      description: "Professional DJ backpack with multiple compartments for equipment",
      colors: ["Black", "Gray"]
    },
    {
      id: 6,
      name: "Inspirational Mug Set",
      price: 1200,
      originalPrice: null,
      category: "Accessories",
      rating: 4.5,
      reviews: 67,
      inStock: true,
      image: "☕",
      description: "Set of 2 ceramic mugs with gospel quotes and DJ Kach branding",
      colors: ["White", "Blue"]
    }
  ]

  const categories = ["All", "Apparel", "Music", "Accessories"]
  const features = [
    { icon: Truck, title: "Free Shipping", description: "On orders over KSh 2,000" },
    { icon: Shield, title: "Quality Guarantee", description: "100% authentic merchandise" },
    { icon: Star, title: "5-Star Reviews", description: "Loved by our community" }
  ]

  return (
    <section id="merchandise" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Official <span className="text-divine">Merchandise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Represent your faith and support DJ Kach's ministry with our exclusive collection 
            of high-quality gospel-inspired merchandise.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="flex items-center space-x-3 justify-center md:justify-start">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">{feature.title}</div>
                    <div className="text-xs text-muted-foreground">{feature.description}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center space-x-2">
            {categories.map((category) => (
              <Button key={category} variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="card-divine group overflow-hidden">
              <CardHeader className="pb-4">
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform">
                  {product.image}
                </div>
                
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs mb-2">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-foreground">
                      KSh {product.price.toLocaleString()}
                    </div>
                    {product.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        KSh {product.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>

                {/* Rating and Reviews */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Colors */}
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-2">Available Colors:</div>
                  <div className="flex items-center space-x-2">
                    {product.colors.map((color) => (
                      <Badge key={color} variant="secondary" className="text-xs">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Add to Cart */}
                <Button 
                  variant={product.inStock ? "divine" : "outline"} 
                  className="w-full"
                  disabled={!product.inStock}
                >
                  {product.inStock ? (
                    <>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </>
                  ) : (
                    "Out of Stock"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-divine max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-divine">Support the Ministry</h3>
              <p className="text-muted-foreground mb-6">
                Every purchase helps support DJ Kach's gospel ministry and enables us to reach 
                more communities with the message of faith, hope, and love through music.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="divine" size="lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Shop All Items
                </Button>
                <Button variant="outline" size="lg">
                  Custom Orders
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default MerchandiseSection