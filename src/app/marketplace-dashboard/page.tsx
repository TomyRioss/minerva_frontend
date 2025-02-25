import { Search, Plus, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
  sold: number
  revenue: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Reloj Smart Azul Marino",
    category: "Reloj, hombre",
    price: 230,
    stock: 500,
    sold: 85,
    revenue: 14950,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LYOyeUN0HP0fi1BAP2qN02OEPy7EDs.png",
  },
  {
    id: 2,
    name: "Mochila Azul Oscuro",
    category: "Mochila, hombre",
    price: 150,
    stock: 380,
    sold: 74,
    revenue: 11100,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LYOyeUN0HP0fi1BAP2qN02OEPy7EDs.png",
  },
  // Add more products as needed
]

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-600">Minerva</h1>
        </div>
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100">
            Panel de administracion
          </a>
          <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100">
            Pedidos
          </a>
          <a href="#" className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 text-blue-600">
            Productos
          </a>
          <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100">
            Clientes
          </a>
          <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100">
            Mensajes
          </a>
          <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100">
            Configuración
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        {/* Header */}
        <header className="flex items-center justify-between border-b bg-white px-6 py-4">
          <div className="relative w-96">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Buscar por..." className="pl-8" />
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-gray-100 p-2">
              <span className="sr-only">Notificaciones</span>
              <div className="relative">
                <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
              </div>
            </button>
            <div className="flex items-center gap-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LYOyeUN0HP0fi1BAP2qN02OEPy7EDs.png"
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium">Jeremias Rivelli</p>
                <p className="text-xs text-gray-500">Cuenta vendedor</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {/* Filters */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todo</SelectItem>
                  <SelectItem value="men">Hombres</SelectItem>
                  <SelectItem value="women">Mujeres</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todo</SelectItem>
                  <SelectItem value="active">Activos</SelectItem>
                  <SelectItem value="inactive">Inactivos</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Precio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todo</SelectItem>
                  <SelectItem value="low">Menor a mayor</SelectItem>
                  <SelectItem value="high">Mayor a menor</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Fecha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todo</SelectItem>
                  <SelectItem value="today">Hoy</SelectItem>
                  <SelectItem value="week">Esta semana</SelectItem>
                  <SelectItem value="month">Este mes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Agregar producto
            </Button>
          </div>

          {/* Products Table */}
          <div className="rounded-lg border bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre del producto</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Precio</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Vendido</TableHead>
                  <TableHead>Ganancia</TableHead>
                  <TableHead className="w-[50px]">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-10 w-10 rounded-lg object-cover"
                        />
                        {product.name}
                      </div>
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.sold}</TableCell>
                    <TableCell>${product.revenue}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex items-center justify-between">
            <Select>
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Show: 10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                {"<"}
              </Button>
              <Button variant="outline" size="icon" className="bg-blue-600 text-white">
                1
              </Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <Button variant="outline" size="icon">
                {">"}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

