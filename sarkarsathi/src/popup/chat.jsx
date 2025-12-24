import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import ChatInput from "./ChatInput"

export default function Chat({ onBack }) {
  return (
    <div className="w-80 h-[420px] flex flex-col">
      <div className="p-3 border-b flex justify-between items-center">
        <h3 className="font-medium">New Scheme Detected</h3>
        <Badge onClick={onBack} className="cursor-pointer">
          Back
        </Badge>
      </div>

      <ScrollArea className="flex-1 p-3 space-y-4">
        <div className="flex gap-2">
          <Avatar>
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div className="bg-muted p-2 rounded-md text-sm">
            A new pension scheme for senior citizens was announced.
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <div className="bg-primary text-primary-foreground p-2 rounded-md text-sm">
            Am I eligible?
          </div>
        </div>
      </ScrollArea>

      <ChatInput />
    </div>
  )
}
