import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    // if user already exists
    const userData = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    // if not then add user
    if (userData?.length == 0) {
      const data = {
        name: args.name,
        email: args.email,
        credits: 50000,
      };
      const result = await ctx.db.insert("users", data);
      console.log(result);
      return data;
    }
    
    return userData[0];
  },
});
