import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// 1. Define the structure of your Marketplace Item
interface PrecastItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
}

// 2. Type the component props
interface ListingCardProps {
  item: PrecastItem;
}
export default function ListingCard({ item }: ListingCardProps) {  return (
    <Card className="border-t-4 border-t-h2o-dark">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{item.title}</CardTitle>
          <Badge variant="outline" className="text-h2o-light border-h2o-light">
            {item.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <img src={item.image} alt={item.title} className="rounded-md object-cover h-48 w-full" />
        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-slate-50 p-4">
        <span className="font-bold text-h2o-dark">${item.price}</span>
        <Button className="bg-h2o-dark hover:bg-h2o-light text-white">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}