import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { mockCourses, mockNotifications } from "@/lib/mock-data";
  import { Bell, BookOpen, CheckCircle, Circle } from "lucide-react";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  
  export default function PortalPage() {
    return (
      <div className="bg-primary/5">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-headline">Student Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Alex!</p>
            </div>
            <Avatar className="h-16 w-16">
                <AvatarImage src="https://placehold.co/100x100.png" alt="Student avatar" data-ai-hint="student portrait" />
                <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Class Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="text-primary" />
                    My Class Schedule
                  </CardTitle>
                  <CardDescription>Your courses for the Fall 2024 semester.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Course</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Location</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockCourses.map((course) => (
                        <TableRow key={course.code}>
                          <TableCell className="font-medium">{course.code}</TableCell>
                          <TableCell>{course.title}</TableCell>
                          <TableCell>{course.time}</TableCell>
                          <TableCell>{course.location}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
  
            <div className="space-y-8">
              {/* Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="text-primary"/>
                    Notifications
                  </CardTitle>
                  <CardDescription>Important updates and reminders.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {mockNotifications.map(notification => (
                        <li key={notification.id} className="flex items-start gap-3">
                            <div>
                                {notification.read ? (
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                ) : (
                                    <Circle className="h-5 w-5 text-accent mt-0.5" />
                                )}
                            </div>
                            <div>
                                <p className={`text-sm ${notification.read ? 'text-muted-foreground' : 'font-semibold'}`}>
                                    {notification.message}
                                </p>
                                <p className="text-xs text-muted-foreground">{notification.date}</p>
                            </div>
                        </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                  <CardHeader>
                      <CardTitle>Quick Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <div>
                          <p className="text-sm font-medium text-muted-foreground">GPA</p>
                          <p className="text-2xl font-bold">3.85</p>
                      </div>
                      <div>
                          <p className="text-sm font-medium text-muted-foreground">Major</p>
                          <p className="text-lg font-semibold">Computer Science</p>
                      </div>
                      <div>
                          <p className="text-sm font-medium text-muted-foreground">Advisor</p>
                          <p className="text-lg font-semibold">Dr. Ada Lovelace</p>
                      </div>
                  </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
  