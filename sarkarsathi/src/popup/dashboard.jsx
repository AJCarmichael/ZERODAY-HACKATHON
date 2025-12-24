import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Dashboard({ onFill, onUpload, onOpenChat }) {
  return (
    <Card className="w-80">
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Dashboard</h2>
          <Badge variant="destructive" className="rounded-full">
            New
          </Badge>
        </div>

        <Separator />

        <Button className="w-full" onClick={onFill}>
          Fill Government Form
        </Button>

        <Button variant="outline" className="w-full" onClick={onUpload}>
          Upload Documents
        </Button>

        <Button
          variant="secondary"
          className="w-full"
          onClick={onOpenChat}
        >
          Deep Research Updates
        </Button>
      </CardContent>
    </Card>
  )
}
