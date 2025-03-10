"use client"
import type { ScopeItemTag } from "@/API"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"

interface ScopeItemTagListProps {
    tags: ScopeItemTag[]
    isLoading: boolean
    companyId: string
}

export function ScopeItemTagList({ tags, isLoading, companyId }: ScopeItemTagListProps) {
    const router = useRouter()

    const handleEdit = (tagId: string) => {
        router.push(`/secure/companies/${companyId}/scope-item-tags/${tagId}/edit`)
    }

    const handleDelete = (tagId: string) => {
        router.push(`/secure/companies/${companyId}/scope-item-tags/${tagId}/delete`)
    }

    if (isLoading) {
        return (
            <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (tags.length === 0) {
        return <div className="text-center py-10 text-gray-500">No tags found. Create your first tag to get started.</div>
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Color</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tags.map((tag) => (
                    <TableRow key={tag.id}>
                        <TableCell>
                            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: tag.color || "#cccccc" }} />
                        </TableCell>
                        <TableCell className="font-medium">
                            <Badge
                                style={{
                                    backgroundColor: tag.color || undefined,
                                    color: tag.color ? getContrastColor(tag.color) : undefined,
                                }}
                            >
                                {tag.name}
                            </Badge>
                        </TableCell>
                        <TableCell>{tag.description || "-"}</TableCell>
                        <TableCell className="text-right">
                            <div className="flex justify-end space-x-2">
                                <Button variant="outline" size="sm" onClick={() => handleEdit(tag.id)}>
                                    <Edit className="h-4 w-4" />
                                    <span className="sr-only">Edit</span>
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => handleDelete(tag.id)}>
                                    <Trash2 className="h-4 w-4" />
                                    <span className="sr-only">Delete</span>
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

// Helper function to determine text color based on background color
function getContrastColor(hexColor: string): string {
    // Remove the # if it exists
    hexColor = hexColor.replace("#", "")

    // Convert to RGB
    const r = Number.parseInt(hexColor.substr(0, 2), 16)
    const g = Number.parseInt(hexColor.substr(2, 2), 16)
    const b = Number.parseInt(hexColor.substr(4, 2), 16)

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

    // Return black or white based on luminance
    return luminance > 0.5 ? "#000000" : "#ffffff"
}

