import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { MessageSquare, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";

export default async function DashboardPage() {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect("/sign-in");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      clerkId: clerkUser.id,
    },
    include: {
      chatbots: true,
    },
  });

  // If the user does not exist in the database, create them.
  // A more robust solution would be to use a webhook on user creation.
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        clerkId: clerkUser.id,
        email: clerkUser.emailAddresses[0].emailAddress,
        name: clerkUser.firstName,
      },
      include: {
        chatbots: true,
      }
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground text-sm">
              Selamat datang, {clerkUser.firstName}
            </p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stats Cards */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Chatbots</p>
                <p className="text-3xl font-bold text-foreground mt-2">
                  {dbUser.chatbots.length}
                </p>
              </div>
              <MessageSquare className="w-8 h-8 text-primary opacity-20" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">
                  Total Conversations
                </p>
                <p className="text-3xl font-bold text-foreground mt-2">0</p>
              </div>
              <BarChart3 className="w-8 h-8 text-accent opacity-20" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Response Rate</p>
                <p className="text-3xl font-bold text-foreground mt-2">0%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-primary opacity-20" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Satisfaction</p>
                <p className="text-3xl font-bold text-foreground mt-2">0%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-accent opacity-20" />
            </div>
          </div>
        </div>

        {/* Chatbot list or create button */}
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-foreground">
              Chatbots Anda
            </h2>
            <Button className="bg-primary hover:bg-primary/90">
              Buat Chatbot Baru
            </Button>
          </div>

          {dbUser.chatbots.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                Belum ada chatbot? Buat yang pertama sekarang.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {dbUser.chatbots.map((bot) => (
                <li
                  key={bot.id}
                  className="p-4 border rounded flex justify-between items-center"
                >
                  <div>
                    <span className="font-semibold">{bot.name}</span>
                    <span className="text-sm text-muted-foreground ml-2">
                      ({bot.platform})
                    </span>
                  </div>
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded-full ${
                      bot.isActive
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {bot.isActive ? "Aktif" : "Non-aktif"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
