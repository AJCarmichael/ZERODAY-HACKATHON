import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, Send } from "lucide-react"

export default function ChatInput() {
  return (
    <div className="p-2 border-t flex items-center gap-2">
      <Button size="icon" variant="ghost">
        <Mic className="w-4 h-4" />
      </Button>

      <Input placeholder="Ask about the scheme..." />

      <Button size="icon">
        <Send className="w-4 h-4" />
      </Button>
    </div>
  )
}
