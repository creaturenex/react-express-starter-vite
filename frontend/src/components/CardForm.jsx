import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Prism from "prismjs";
import "../assets/css/prismjs-monokai.css"
import { useEffect } from "react"

export function CardForm({ title }) {
  useEffect(()=>{
    Prism.highlightAll();
  }, []);

  return (
    <Card className="flex-1 m-4 w-96">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <p>Material-UI provides a variety of UI components to render data.</p>
          <br/>
          <p>To change the chips above to list items, open frontend/src/components/MaterialCard.js and replace the following code:</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <pre>
          <code className="language-css">
            {`
              ::placeholder {
                  color: var(--placeholder);
                  opacity: 1;
              }
            `}
          </code>
        </pre>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
