using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace tuber
{
    public partial class tuber_databaseContext : DbContext
    {
        public tuber_databaseContext()
        {
        }

        public tuber_databaseContext(DbContextOptions<tuber_databaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admins> Admins { get; set; }
        public virtual DbSet<Adminsmessage> Adminsmessage { get; set; }
        public virtual DbSet<Booking> Booking { get; set; }
        public virtual DbSet<Guidemessage> Guidemessage { get; set; }
        public virtual DbSet<Issue> Issue { get; set; }
        public virtual DbSet<Review> Review { get; set; }
        public virtual DbSet<Session> Session { get; set; }
        public virtual DbSet<Tour> Tour { get; set; }
        public virtual DbSet<Touristmessage> Touristmessage { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=localhost;Database=tuber_database;User Id=sa;Password=myPassw0rd;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admins>(entity =>
            {
                entity.ToTable("ADMINS");

                entity.Property(e => e.AdminsId)
                    .HasColumnName("ADMINS_ID")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("PASSWORD")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Adminsmessage>(entity =>
            {
                entity.ToTable("ADMINSMESSAGE");

                entity.Property(e => e.AdminsMessageId)
                    .HasColumnName("ADMINS_MESSAGE_ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.AdminsContent)
                    .IsRequired()
                    .HasColumnName("ADMINS_CONTENT")
                    .HasMaxLength(280)
                    .IsUnicode(false);

                entity.Property(e => e.AdminsDatetime)
                    .HasColumnName("ADMINS_DATETIME")
                    .HasColumnType("smalldatetime");

                entity.Property(e => e.AdminsId)
                    .IsRequired()
                    .HasColumnName("ADMINS_ID")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.AdminsSubject)
                    .IsRequired()
                    .HasColumnName("ADMINS_SUBJECT")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.GuideId).HasColumnName("GUIDE_ID");

                entity.Property(e => e.TourId).HasColumnName("TOUR_ID");

                entity.Property(e => e.TouristId).HasColumnName("TOURIST_ID");

                entity.HasOne(d => d.Admins)
                    .WithMany(p => p.Adminsmessage)
                    .HasForeignKey(d => d.AdminsId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ADMINSMESSAGE_ADMINS_ID");

                entity.HasOne(d => d.Guide)
                    .WithMany(p => p.AdminsmessageGuide)
                    .HasPrincipalKey(p => p.GuideId)
                    .HasForeignKey(d => d.GuideId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ADMINSMESSAGE_GUIDE_ID");

                entity.HasOne(d => d.Tour)
                    .WithMany(p => p.Adminsmessage)
                    .HasForeignKey(d => d.TourId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ADMINSMESSAGE_TOUR_ID");

                entity.HasOne(d => d.Tourist)
                    .WithMany(p => p.AdminsmessageTourist)
                    .HasPrincipalKey(p => p.TouristId)
                    .HasForeignKey(d => d.TouristId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ADMINSMESSAGE_TOURIST_ID");
            });

            modelBuilder.Entity<Booking>(entity =>
            {
                entity.HasKey(e => new { e.SessionId, e.TouristId })
                    .HasName("PK_BOOKING_ID");

                entity.ToTable("BOOKING");

                entity.Property(e => e.SessionId).HasColumnName("SESSION_ID");

                entity.Property(e => e.TouristId).HasColumnName("TOURIST_ID");

                entity.Property(e => e.BookingState)
                    .IsRequired()
                    .HasColumnName("BOOKING_STATE")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Price)
                    .HasColumnName("PRICE")
                    .HasColumnType("decimal(5, 2)");

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.Booking)
                    .HasForeignKey(d => d.SessionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BOOKING_SESSION_ID");

                entity.HasOne(d => d.Tourist)
                    .WithMany(p => p.Booking)
                    .HasPrincipalKey(p => p.TouristId)
                    .HasForeignKey(d => d.TouristId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BOOKING_TOURIST_ID");
            });

            modelBuilder.Entity<Guidemessage>(entity =>
            {
                entity.ToTable("GUIDEMESSAGE");

                entity.Property(e => e.GuideMessageId)
                    .HasColumnName("GUIDE_MESSAGE_ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.GuideContent)
                    .IsRequired()
                    .HasColumnName("GUIDE_CONTENT")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.GuideDatetime)
                    .HasColumnName("GUIDE_DATETIME")
                    .HasColumnType("smalldatetime");

                entity.Property(e => e.GuideId).HasColumnName("GUIDE_ID");

                entity.Property(e => e.GuideSubject)
                    .IsRequired()
                    .HasColumnName("GUIDE_SUBJECT")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.TourId).HasColumnName("TOUR_ID");

                entity.Property(e => e.TouristId).HasColumnName("TOURIST_ID");

                entity.HasOne(d => d.Guide)
                    .WithMany(p => p.GuidemessageGuide)
                    .HasPrincipalKey(p => p.GuideId)
                    .HasForeignKey(d => d.GuideId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_GUIDEMESSAGE_GUIDE_ID");

                entity.HasOne(d => d.Tour)
                    .WithMany(p => p.Guidemessage)
                    .HasForeignKey(d => d.TourId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_GUIDEMESSAGE_TOUR_ID");

                entity.HasOne(d => d.Tourist)
                    .WithMany(p => p.GuidemessageTourist)
                    .HasPrincipalKey(p => p.TouristId)
                    .HasForeignKey(d => d.TouristId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_GUIDEMESSAGE_TOURIST_ID");
            });

            modelBuilder.Entity<Issue>(entity =>
            {
                entity.HasKey(e => new { e.SessionId, e.TouristId });

                entity.ToTable("ISSUE");

                entity.Property(e => e.SessionId).HasColumnName("SESSION_ID");

                entity.Property(e => e.TouristId).HasColumnName("TOURIST_ID");

                entity.Property(e => e.AdminsId)
                    .IsRequired()
                    .HasColumnName("ADMINS_ID")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.IssueDatetime)
                    .HasColumnName("ISSUE_DATETIME")
                    .HasColumnType("smalldatetime");

                entity.Property(e => e.IssueDescription)
                    .IsRequired()
                    .HasColumnName("ISSUE_DESCRIPTION")
                    .HasMaxLength(280)
                    .IsUnicode(false);

                entity.Property(e => e.IssueStatus)
                    .IsRequired()
                    .HasColumnName("ISSUE_STATUS")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.IssueSubject)
                    .IsRequired()
                    .HasColumnName("ISSUE_SUBJECT")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Admins)
                    .WithMany(p => p.Issue)
                    .HasForeignKey(d => d.AdminsId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ISSUE_ADMINS_ID");

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.Issue)
                    .HasForeignKey(d => d.SessionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ISSUE_SESSION_ID");

                entity.HasOne(d => d.Tourist)
                    .WithMany(p => p.Issue)
                    .HasPrincipalKey(p => p.TouristId)
                    .HasForeignKey(d => d.TouristId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ISSUE_TOURIST_ID");
            });

            modelBuilder.Entity<Review>(entity =>
            {
                entity.HasKey(e => new { e.TouristId, e.TourId });

                entity.ToTable("REVIEW");

                entity.Property(e => e.TouristId).HasColumnName("TOURIST_ID");

                entity.Property(e => e.TourId).HasColumnName("TOUR_ID");

                entity.Property(e => e.ReviewDescription)
                    .IsRequired()
                    .HasColumnName("REVIEW_DESCRIPTION")
                    .HasMaxLength(280)
                    .IsUnicode(false);

                entity.Property(e => e.ReviewSubject)
                    .IsRequired()
                    .HasColumnName("REVIEW_SUBJECT")
                    .HasMaxLength(280)
                    .IsUnicode(false);

                entity.Property(e => e.Score)
                    .HasColumnName("SCORE")
                    .HasColumnType("decimal(4, 2)");

                entity.HasOne(d => d.Tour)
                    .WithMany(p => p.Review)
                    .HasForeignKey(d => d.TourId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_REVIEW_TOUR_ID");

                entity.HasOne(d => d.Tourist)
                    .WithMany(p => p.Review)
                    .HasPrincipalKey(p => p.TouristId)
                    .HasForeignKey(d => d.TouristId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_REVIEW_TOURIST_ID");
            });

            modelBuilder.Entity<Session>(entity =>
            {
                entity.ToTable("SESSION");

                entity.HasIndex(e => new { e.TourId, e.SessionDatetime })
                    .HasName("CK_SESSION")
                    .IsUnique();

                entity.Property(e => e.SessionId)
                    .HasColumnName("SESSION_ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.SessionDatetime)
                    .HasColumnName("SESSION_DATETIME")
                    .HasColumnType("smalldatetime");

                entity.Property(e => e.TourId).HasColumnName("TOUR_ID");

                entity.HasOne(d => d.Tour)
                    .WithMany(p => p.Session)
                    .HasForeignKey(d => d.TourId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SESSION_TOUR_ID");
            });

            modelBuilder.Entity<Tour>(entity =>
            {
                entity.ToTable("TOUR");

                entity.Property(e => e.TourId)
                    .HasColumnName("TOUR_ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.AggregateScore)
                    .HasColumnName("AGGREGATE_SCORE")
                    .HasColumnType("decimal(4, 2)");

                entity.Property(e => e.GuideId).HasColumnName("GUIDE_ID");

                entity.Property(e => e.Latitude)
                    .HasColumnName("LATITUDE")
                    .HasColumnType("decimal(8, 6)");

                entity.Property(e => e.Longitude)
                    .HasColumnName("LONGITUDE")
                    .HasColumnType("decimal(9, 6)");

                entity.Property(e => e.TourDescription)
                    .IsRequired()
                    .HasColumnName("TOUR_DESCRIPTION")
                    .HasMaxLength(280)
                    .IsUnicode(false);

                entity.Property(e => e.TourTitle)
                    .IsRequired()
                    .HasColumnName("TOUR_TITLE")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Guide)
                    .WithMany(p => p.Tour)
                    .HasPrincipalKey(p => p.GuideId)
                    .HasForeignKey(d => d.GuideId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TOUR_GUIDE_ID");
            });

            modelBuilder.Entity<Touristmessage>(entity =>
            {
                entity.ToTable("TOURISTMESSAGE");

                entity.Property(e => e.TouristMessageId)
                    .HasColumnName("TOURIST_MESSAGE_ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.GuideId).HasColumnName("GUIDE_ID");

                entity.Property(e => e.TourId).HasColumnName("TOUR_ID");

                entity.Property(e => e.TouristContent)
                    .IsRequired()
                    .HasColumnName("TOURIST_CONTENT")
                    .HasMaxLength(280)
                    .IsUnicode(false);

                entity.Property(e => e.TouristDatetime)
                    .HasColumnName("TOURIST_DATETIME")
                    .HasColumnType("smalldatetime");

                entity.Property(e => e.TouristId).HasColumnName("TOURIST_ID");

                entity.Property(e => e.TouristSubject)
                    .IsRequired()
                    .HasColumnName("TOURIST_SUBJECT")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Guide)
                    .WithMany(p => p.TouristmessageGuide)
                    .HasPrincipalKey(p => p.GuideId)
                    .HasForeignKey(d => d.GuideId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TOURISTMESSAGE_GUIDE_ID");

                entity.HasOne(d => d.Tour)
                    .WithMany(p => p.Touristmessage)
                    .HasForeignKey(d => d.TourId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TOURISTMESSAGE_TOUR_ID");

                entity.HasOne(d => d.Tourist)
                    .WithMany(p => p.TouristmessageTourist)
                    .HasPrincipalKey(p => p.TouristId)
                    .HasForeignKey(d => d.TouristId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TOURISTMESSAGE_TOURIST_ID");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.ToTable("USERS");

                entity.HasIndex(e => e.GuideId)
                    .HasName("CK_GUIDE_ID")
                    .IsUnique();

                entity.HasIndex(e => e.TouristId)
                    .HasName("CK_TOURIST_ID")
                    .IsUnique();

                entity.Property(e => e.UsersId)
                    .HasColumnName("USERS_ID")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasColumnName("FIRSTNAME")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.GuideId).HasColumnName("GUIDE_ID");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasColumnName("LASTNAME")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("PASSWORD")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.TouristId).HasColumnName("TOURIST_ID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
