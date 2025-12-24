import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Auth({ onLogin }) {
  return (
    <Card className="w-80">
      <CardContent className="p-6 space-y-4">
        <h1 className="text-xl font-semibold text-center">
          SarkarSathi
        </h1>

        <Button className="w-full" onClick={onLogin}>
          Continue with Google
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Secure government scheme assistant
        </p>
      </CardContent>
    </Card>
  )
}
